export class CatService{

    static getfacts(){
        return fetch('https://catfact.ninja/facts')
        .then(resp => resp.json())
        .then(obj => this.elaborateData(obj));
    }

    static elaborateData(obj){
        console.log('obj', obj);
        const facts = obj.data;
        // console.log('facts', facts);
        // const first6 = facts.filter((f, i) => i < 6);
        const first6 = this.getFirst6(facts);
        return first6;

    }

    static getFirst6(array){

        const tempArray = [];
        
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i < 6) {
                tempArray.push(element);
            } else {
                break;
            }
        }

        return tempArray;
    }

}

