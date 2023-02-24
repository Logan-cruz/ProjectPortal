//Luke Thompson
//Implement a plugin that will take a scanned character from rpg maker, and replace the character you have with the one you scanned



var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'scan') {
        var newChar = prompt("Which character do you want to play as now?")
        switch (newChar) {
            case "StealthElf":
                var charNum = 1
                break;
            case "LittleMac":
                var charNum = 2
                break;
            case "Benny":
                var charNum = 3
                break;
            default:
                break;
        }
        $gameVariables.setValue(1, charNum);
    }
}