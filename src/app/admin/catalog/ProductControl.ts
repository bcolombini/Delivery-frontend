export class ProductControl {

    private limitStringSize:Number = 1500;
    
    onLimitCharset(event){
        event.target.value = event.target.value.substr(0, this.limitStringSize)
        this.updateConter(event.target.value.length)
    }

    protected updateConter(textAreaLength){
        document.querySelector(".counter").innerHTML = textAreaLength+"/1500"
    }

    onChangePrice(event){
        let value = this.removeAllNonDigit(event.target.value)
        
        if(value < 1){
        event.target.value = "0,00"
        return
        }

        const numberWithoutZeroLeft = this.removeZeroFromLeft(value)
        event.target.value = this.formatNumberField(numberWithoutZeroLeft);    
    }


    protected removeAllNonDigit(value){
        return value.replace(/\D/g,'')
    }

    protected removeZeroFromLeft(value){
        return value.replace(/^0+/, '');
    }

    protected formatNumberField(value){
        if(value < 10 && value > 0){
            value = "0,0"+value
        } else if(value < 100 && value > 0){
            value = "0,"+value
        } else {      
            let eventValue = (value/100).toLocaleString('pt-BR')
            if(eventValue.includes(",")){
                value = eventValue.split(",")[1].length < 2?eventValue+"0":eventValue;
            } else {
                value = eventValue+",00"
            }
        }
        return value;
    }


}