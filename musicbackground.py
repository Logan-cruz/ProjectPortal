from synthesizer import Writer
from synthesizer import Player, Synthesizer, Waveform


player = Player()
player.open_stream()
synthesizer = Synthesizer(osc1_waveform=Waveform.sine, osc1_volume=1.0, use_osc2=False)
writer = Writer()
chord =[200,150,100]
player.play_wave(synthesizer.generate_chord(chord, 3))
player.play_wave(synthesizer.generate_constant_wave(180,1))
chord1 =[100,70,50]
player.play_wave(synthesizer.generate_chord(chord1, 3))
player.play_wave(synthesizer.generate_constant_wave(80,1))


wave = synthesizer.generate_chord(chord, 3.6)
wave1 = synthesizer.generate_constant_wave(180,1.2)
wave2 = synthesizer.generate_chord(chord1, 3.6)
wave3 = synthesizer.generate_constant_wave(80,1.2)

writer.write_waves("Project_Portal/audio/bgm/TownMusicBackound.ogg",wave,wave1,wave2,wave3)

