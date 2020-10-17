https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

    function warnTheSheep(queue) {
        if(queue[queue.length - 1] === 'wolf'){
            return "Pls go away and stop eating my sheep";
        }
        let wolfIndex = queue.indexOf('wolf');
        let q = queue.length;
        return `Oi! Sheep number ${q - wolfIndex - 1}! You are about to be eaten by a wolf!`
    }