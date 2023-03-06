from synthesizer import Writer
from synthesizer import Player, Synthesizer, Waveform


player = Player()
player.open_stream()
synthesizer = Synthesizer(osc1_waveform=Waveform.sine, osc1_volume=2.0, use_osc2=False)

# Play A4
#player.play_wave(synthesizer.generate_constant_wave(440.0, 3.0))
# Play C major
#player.play_wave(synthesizer.generate_chord(chord, 3.0))

# You can also specify frequencies to play just intonation

chord = [600.0,550.0,10.0]
player.play_wave(synthesizer.generate_constant_wave(600.0,1.25))

player.play_wave(synthesizer.generate_chord(chord, 1.25))

player.play_wave(synthesizer.generate_constant_wave(500.0,1.25))

player.play_wave(synthesizer.generate_constant_wave(450.0,1))

chord1 =[400.0,350.0,250.0]
player.play_wave(synthesizer.generate_chord(chord1, 1.5))

chord2=[300.0,350.0,200.0]
player.play_wave(synthesizer.generate_chord(chord2, 2))

chord3=[200.0,350.0,400.0]
player.play_wave(synthesizer.generate_chord(chord3, 1.75))

player.play_wave(synthesizer.generate_constant_wave(380.0,1))

player.play_wave(synthesizer.generate_constant_wave(260.0,1.25))

player.play_wave(synthesizer.generate_constant_wave(350.0,1))

chord4 = [300.0,250.0,150.0]
player.play_wave(synthesizer.generate_chord(chord4, 1.5))

writer = Writer()
#chord = ["C4", "E4", "G4"]
wave = synthesizer.generate_constant_wave(600.0,1.25)
wave1 = synthesizer.generate_chord(chord, 1.25)
wave2 = synthesizer.generate_constant_wave(450.0,1.25)
wave3 = synthesizer.generate_constant_wave(500.0,1)
wave4 = synthesizer.generate_chord(chord1, 1.5)
wave5 = synthesizer.generate_chord(chord2, 2)
wave6 = synthesizer.generate_chord(chord3, 1.75)
wave7 = synthesizer.generate_constant_wave(380.0,1)
wave8 = synthesizer.generate_constant_wave(260.0,1.25)
wave9 = synthesizer.generate_constant_wave(350.0,1)
wave10 = synthesizer.generate_chord(chord4, 1.5)




writer.write_waves("ProgHome1.ogg",wave,wave1,wave2,wave3,wave4,wave5,wave6,wave7,wave8,wave9,wave10)