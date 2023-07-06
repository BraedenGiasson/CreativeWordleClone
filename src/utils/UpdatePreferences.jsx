

const Preferences = {
    getColorPreference: function(preferenceName){
        try {
            const color = JSON.parse(localStorage.getItem(preferenceName));
            console.log(color);  
            return color;
        } catch (error) {
            return null;
        }
    },    
    setColorPreference: function(preferenceName, color){
        localStorage.setItem(preferenceName, JSON.stringify(color));
        console.log(color);
    }
}

export default Preferences;