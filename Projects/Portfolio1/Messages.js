const getRandMess = () => {
    const random = Math.floor(Math.random() * 10); //genertes a random number
    //if else staments so if the number equals 0 then 'return' Marathon
    
    if (random === 0) {
      return 'Do 10 Plies';
    } else if (random === 1) {
      return 'Practice Tendu';
    } else if (random === 2) {
      return 'Work on double Pirouette';
    }
    else if (random === 3) {
        return 'Practice fouettes';
    }
    else if (random === 4) {
        return 'Do a 15 minute stretch';
    }
    else if (random === 5) {
        return 'Pointe work for 10 minutes';
      }
    else {
        return 'Watch black swan'
    }
};