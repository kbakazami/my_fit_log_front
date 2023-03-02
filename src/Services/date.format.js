class DateFormat{

    formatDate(){
        const today = new Date();
        return `${today.getFullYear()}-${today.getMonth()}-${today.getDay()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    }

}

export default new DateFormat();