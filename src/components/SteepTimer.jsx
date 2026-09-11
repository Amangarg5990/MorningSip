import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Bell } from 'lucide-react';

const TIMER_PRESETS = [
  { name: 'Darjeeling First Flush', seconds: 180, temp: '85°C (185°F)', icon: '🌸' },
  { name: 'Nilgiri Blue Mountain Frost', seconds: 180, temp: '90°C (194°F)', icon: '🏔️' },
  { name: 'Meghalaya Cloud Oolong', seconds: 210, temp: '90°C (195°F)', icon: '☁️' },
  { name: 'Assam Estate Orthodox', seconds: 240, temp: '95°C (203°F)', icon: '☕' },
  { name: 'Imperial Royal Masala Chai', seconds: 360, temp: '100°C (Boil with Milk)', icon: '🫖' },
  { name: 'Darjeeling Silver Needle', seconds: 270, temp: '80°C (176°F)', icon: '🌿' }
];

export default function SteepTimer() {
  const [selectedPreset, setSelectedPreset] = useState(TIMER_PRESETS[1]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setTimerComplete(true);
      if (soundEnabled) {
        playBellSound();
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, soundEnabled]);

  const playBellSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 chime
      gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 2.5);
    } catch (e) {
      console.log('Audio playback not allowed', e);
    }
  };

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setTimeLeft(preset.seconds);
    setIsRunning(false);
    setTimerComplete(false);
  };

  const handleReset = () => {
    setTimeLeft(selectedPreset.seconds);
    setIsRunning(false);
    setTimerComplete(false);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Ritual Precision</div>
          <h2 className="section-title">Digital Tea Steep Timer</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Never over-steep or burn your delicate leaves again. Select your tea variety and start the ritual timer.
          </p>
        </div>

        <div className="timer-card">
          {/* Preset Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {TIMER_PRESETS.map((p) => (
              <button
                key={p.name}
                className={`tab-btn ${selectedPreset.name === p.name ? 'active' : ''}`}
                onClick={() => handleSelectPreset(p)}
              >
                <span style={{ marginRight: '6px' }}>{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.9rem', color: 'var(--color-emerald)', fontWeight: '600', marginBottom: '0.5rem' }}>
            Recommended Water Temp: {selectedPreset.temp}
          </div>

          {/* Circle Ring Display */}
          <div className="timer-ring">
            <div className="timer-time">
              {formatTime(timeLeft)}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
              {selectedPreset.name}
            </div>
          </div>

          {timerComplete && (
            <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid var(--color-emerald)', padding: '0.8rem', borderRadius: 'var(--radius-md)', color: 'var(--color-emerald)', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Bell size={18} /> Steep Complete! Pour and Enjoy your perfect cup.
            </div>
          )}

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button
              className="btn-primary"
              onClick={() => setIsRunning(!isRunning)}
              style={{ minWidth: '140px', justifyContent: 'center' }}
            >
              {isRunning ? <Pause size={18} /> : <Play size={18} />}
              {isRunning ? 'Pause' : 'Start Steep'}
            </button>

            <button className="icon-btn" onClick={handleReset} title="Reset Timer">
              <RotateCcw size={18} />
            </button>

            <button
              className="icon-btn"
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute Alert Sound' : 'Enable Alert Sound'}
              style={{ color: soundEnabled ? 'var(--color-gold)' : 'var(--text-dim)' }}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
