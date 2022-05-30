const fs = require('fs')
const path = require('path');
const FileControl = {
    async writecalendarlist(calendar) {

        let rawdata = await JSON.parse(fs.readFileSync(path.join(__dirname + '/../localfile/calendarlist.json')));
        if (rawdata == undefined)
            return false
        else if (rawdata == "") {
            let data = JSON.stringify([]);
            fs.writeFileSync(path.join(__dirname + '/../localfile/calendarlist.json'), data);
        }

        calendar.forEach(data => {
            rawdata.push(data)
        });

        let data = JSON.stringify(rawdata);
        //__dirname 
        fs.writeFileSync(path.join(__dirname + '/../localfile/calendarlist.json'), data);

        return true;

    },
    async readcalendarlist() {

        let rawdata = fs.readFileSync(path.join(__dirname + '/../localfile/calendarlist.json'));

        let data = JSON.parse(rawdata);

        return data;
    },
    async writeschedule(schedule) {
        // console.log(schedule)
        let rawdata = await JSON.parse(fs.readFileSync(path.join(__dirname + '/../localfile/schedulelist.json')));
        if (rawdata == undefined)
            return false
        else if (rawdata == "") {
            let data = JSON.stringify([]);
            fs.writeFileSync(path.join(__dirname + '/../localfile/schedulelist.json'), data);
        }
        schedule.forEach(data => {
            rawdata.push(data)
        });

        let data = JSON.stringify(rawdata);

        fs.writeFileSync(path.join(__dirname + '/../localfile/schedulelist.json'), data);

        return true;

    },
    async readschedule() {

        let rawdata = fs.readFileSync(path.join(__dirname + '/../localfile/schedulelist.json'));

        let data = JSON.parse(rawdata);

        return data;
    }
};

module.exports = FileControl;