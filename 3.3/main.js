
    //create array
    let styles = ['Jazz','Bluzz'];

    //add Rock
        styles.push('Rock');

    //change second element    
        for (let i = 0; i < styles.length; i++) {
            styles[1] = 'Clasic';
                
        }

    //delete first element
        styles.shift();

    //add element at the top array
        styles.unshift('Rapp', 'Reggi');

        console.log("Styles is: " + styles);