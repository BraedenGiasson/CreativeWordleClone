import { DefaultColorPreference } from "./defaultColorPreferences";
import { Preference } from "./preference";
import { PreferenceName } from "./preferenceName";


const Preferences = {
    getColorPreference: function(preferenceName){
        try {
            return JSON.parse(localStorage.getItem(preferenceName));
        } catch (error) {
            return null;
        }
    },    
    setColorPreference: function(preferenceName, color){
        localStorage.setItem(preferenceName, JSON.stringify(color));
    },
    resetColorPreferences: function(){
        const colorPreferenceKeys = Object.keys(DefaultColorPreference);

        colorPreferenceKeys.forEach((key, index) => {
            const colorName = Object.values(PreferenceName)[index];
            const color = Object.values(DefaultColorPreference)[index];
            localStorage.setItem(colorName, JSON.stringify(color))
        })
    },
    saveAllColorPreferences: function(){
        const colorPreferenceKeys = Object.keys(Preference);

        colorPreferenceKeys.forEach((key, index) => {
            const color = Object.values(Preference)[index];
            localStorage.setItem(key, JSON.stringify(color))
        })
    },
}

export default Preferences;