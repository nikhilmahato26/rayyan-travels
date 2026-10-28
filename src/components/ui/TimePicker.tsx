import React, { useState, useEffect, useRef } from 'react';
import { Clock, X, Check, ChevronUp, ChevronDown } from 'lucide-react';

interface TimePickerProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'light' | 'dark';
  className?: string;
  id?: string;
}

interface ParsedTime {
  hour: number;
  minute: number;
  period: 'AM' | 'PM';
}

const parseTimeString = (timeStr?: string): ParsedTime => {
  if (!timeStr || !timeStr.trim()) {
    return { hour: 6, minute: 0, period: 'AM' };
  }

  const str = timeStr.trim();
  const ampmMatch = str.match(/(am|pm)/i);

  if (ampmMatch) {
    const period = ampmMatch[1].toUpperCase() as 'AM' | 'PM';
    const cleanStr = str.replace(/(am|pm)/gi, '').trim();
    const parts = cleanStr.split(':');
    let h = parseInt(parts[0], 10) || 6;
    let m = parseInt(parts[1], 10) || 0;
    if (h < 1) h = 1;
    if (h > 12) h = 12;
    if (m < 0) m = 0;
    if (m > 59) m = 59;
    return { hour: h, minute: m, period };
  }

  // Handle 24h format "18:45"
  const parts = str.split(':');
  if (parts.length >= 2) {
    let rawH = parseInt(parts[0], 10);
    let m = parseInt(parts[1], 10) || 0;
    if (isNaN(rawH)) rawH = 6;
    if (m < 0) m = 0;
    if (m > 59) m = 59;

    let period: 'AM' | 'PM' = 'AM';
    let hour = rawH;

    if (rawH === 0) {
      hour = 12;
      period = 'AM';
    } else if (rawH === 12) {
      hour = 12;
      period = 'PM';
    } else if (rawH > 12) {
      hour = rawH - 12;
      period = 'PM';
    } else {
      period = 'AM';
    }
    return { hour, minute: m, period };
  }

  return { hour: 6, minute: 0, period: 'AM' };
};

const formatTimeOutput = (hour: number, minute: number, period: 'AM' | 'PM'): string => {
  const hStr = hour.toString().padStart(2, '0');
  const mStr = minute.toString().padStart(2, '0');
  return `${hStr}:${mStr} ${period}`;
};

const PRESETS = [
  { label: '06:00 AM', hour: 6, minute: 0, period: 'AM' as const },
  { label: '08:00 AM', hour: 8, minute: 0, period: 'AM' as const },
  { label: '10:30 AM', hour: 10, minute: 30, period: 'AM' as const },
  { label: '01:00 PM', hour: 1, minute: 0, period: 'PM' as const },
  { label: '04:30 PM', hour: 4, minute: 30, period: 'PM' as const },
  { label: '07:00 PM', hour: 7, minute: 0, period: 'PM' as const },
  { label: '09:30 PM', hour: 9, minute: 30, period: 'PM' as const },
];

export const TimePicker: React.FC<TimePickerProps> = ({
  value = '',
  onChange,
  placeholder = 'Select pickup time',
  variant = 'light',
  className = '',
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'hours' | 'minutes'>('hours');
  const [tempHour, setTempHour] = useState(6);
  const [tempMinute, setTempMinute] = useState(0);
  const [tempPeriod, setTempPeriod] = useState<'AM' | 'PM'>('AM');
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync temp state when opening
  useEffect(() => {
    if (isOpen) {
      const parsed = parseTimeString(value);
      setTempHour(parsed.hour);
      setTempMinute(parsed.minute);
      setTempPeriod(parsed.period);
      setActiveTab('hours');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, value]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleApply = () => {
    const formatted = formatTimeOutput(tempHour, tempMinute, tempPeriod);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  const applyPreset = (h: number, m: number, p: 'AM' | 'PM') => {
    setTempHour(h);
    setTempMinute(m);
    setTempPeriod(p);
  };

  const adjustMinute = (delta: number) => {
    setTempMinute((prev) => {
      let next = prev + delta;
      if (next < 0) next = 59;
      if (next > 59) next = 0;
      return next;
    });
  };

  const hoursList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutesList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Input Field */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(true)}
        className={`w-full flex items-center justify-between text-left text-sm px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
          variant === 'dark'
            ? 'bg-white/10 border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20'
            : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue'
        }`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          <Clock className={`w-4 h-4 shrink-0 ${variant === 'dark' ? 'text-brand-gold' : 'text-slate-400'}`} />
          <span className={value ? 'font-medium' : variant === 'dark' ? 'text-gray-400' : 'text-slate-400'}>
            {value || placeholder}
          </span>
        </div>

        {value ? (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onChange('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation();
                onChange('');
              }
            }}
            className="p-1 text-slate-400 hover:text-red-500 rounded-full transition-colors cursor-pointer"
            title="Clear time"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        ) : (
          <span className={`text-xs px-2 py-0.5 rounded-md ${
            variant === 'dark' ? 'bg-white/10 text-gray-300' : 'bg-slate-100 text-slate-500'
          }`}>
            Set
          </span>
        )}
      </button>

      {/* Time Picker Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={modalRef}
            className="w-full max-w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col animate-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
            aria-label="Set Pickup Time"
          >
            {/* Header: Brand Navy with Interactive Time Display */}
            <div className="bg-brand-navy text-white px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-wider text-brand-gold uppercase flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Select Pickup Time
                </span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Large Digital Clock Display */}
              <div className="flex items-center justify-between gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-1 text-3xl font-extrabold tracking-tight">
                  <button
                    type="button"
                    onClick={() => setActiveTab('hours')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === 'hours'
                        ? 'bg-brand-gold text-brand-navy shadow-md ring-2 ring-brand-gold'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {tempHour.toString().padStart(2, '0')}
                  </button>
                  <span className="text-white/40 pb-1">:</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('minutes')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === 'minutes'
                        ? 'bg-brand-gold text-brand-navy shadow-md ring-2 ring-brand-gold'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {tempMinute.toString().padStart(2, '0')}
                  </button>
                </div>

                {/* AM / PM Segmented Control */}
                <div className="flex flex-col gap-1 bg-white/10 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setTempPeriod('AM')}
                    className={`text-xs font-bold px-2.5 py-1 rounded transition-all ${
                      tempPeriod === 'AM'
                        ? 'bg-white text-brand-navy shadow'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    AM
                  </button>
                  <button
                    type="button"
                    onClick={() => setTempPeriod('PM')}
                    className={`text-xs font-bold px-2.5 py-1 rounded transition-all ${
                      tempPeriod === 'PM'
                        ? 'bg-white text-brand-navy shadow'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Presets Carousel / Badges */}
            <div className="bg-slate-50 border-b border-slate-200 px-3 py-2">
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
                Quick Presets:
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {PRESETS.map((p) => {
                  const isSelected =
                    tempHour === p.hour &&
                    tempMinute === p.minute &&
                    tempPeriod === p.period;
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => applyPreset(p.hour, p.minute, p.period)}
                      className={`text-xs whitespace-nowrap px-2.5 py-1 rounded-full border transition-all ${
                        isSelected
                          ? 'bg-brand-navy text-white border-brand-navy font-semibold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selection Body */}
            <div className="p-4">
              {/* Tab Switcher: Hour vs Minute */}
              <div className="flex rounded-lg bg-slate-100 p-1 mb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('hours')}
                  className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition-all ${
                    activeTab === 'hours'
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Select Hour ({tempHour})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('minutes')}
                  className={`flex-1 text-xs font-semibold py-1.5 rounded-md transition-all ${
                    activeTab === 'minutes'
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Select Minute ({tempMinute.toString().padStart(2, '0')})
                </button>
              </div>

              {/* Hours Grid */}
              {activeTab === 'hours' && (
                <div className="grid grid-cols-4 gap-2">
                  {hoursList.map((h) => {
                    const isSelected = tempHour === h;
                    return (
                      <button
                        key={h}
                        type="button"
                        onClick={() => {
                          setTempHour(h);
                          setActiveTab('minutes'); // smooth auto-advance to minute selection
                        }}
                        className={`h-11 rounded-xl text-sm font-semibold flex items-center justify-center transition-all active:scale-95 ${
                          isSelected
                            ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-navy/30'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                        }`}
                      >
                        {h}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Minutes Grid + Fine Tuning */}
              {activeTab === 'minutes' && (
                <div>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {minutesList.map((m) => {
                      const isSelected = tempMinute === m;
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setTempMinute(m)}
                          className={`h-10 rounded-xl text-xs font-semibold flex items-center justify-center transition-all active:scale-95 ${
                            isSelected
                              ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-navy/30'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                          }`}
                        >
                          :{m.toString().padStart(2, '0')}
                        </button>
                      );
                    })}
                  </div>

                  {/* Fine Tuning +/- 1 min (allows exact minutes like :46) */}
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-1.5">
                    <span className="text-[11px] font-medium text-slate-500 pl-2">Exact minute:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => adjustMinute(-1)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 active:scale-95"
                        title="Subtract 1 minute"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-brand-navy">
                        :{tempMinute.toString().padStart(2, '0')}
                      </span>
                      <button
                        type="button"
                        onClick={() => adjustMinute(1)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 active:scale-95"
                        title="Add 1 minute"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions: Fully Responsive, No Overflow, Crystal Clear Buttons */}
            <div className="flex items-center justify-between gap-2 p-3.5 bg-slate-50 border-t border-slate-200">
              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-semibold text-slate-500 hover:text-red-600 px-3 py-2 rounded-lg transition-colors"
              >
                Clear
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApply}
                  className="text-xs font-bold text-brand-navy bg-brand-gold hover:bg-brand-gold-hover px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5 active:scale-95 shrink-0"
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  Set Time
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
