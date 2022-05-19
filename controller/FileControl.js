const fs = require('fs')
const path = require('path');
const FileControl = {
    async write(schedule) {

        let rawdata = await JSON.parse(fs.readFileSync(path.join(__dirname + '/../localfile/schedule.json')));
        // let cars = [{
        //         Name: "chevrolet chevelle malibu",
        //         Miles_per_Gallon: 18,
        //         Cylinders: 8,
        //         Displacement: 307,
        //         Horsepower: 130,
        //         Weight_in_lbs: 3504,
        //         Acceleration: 12,
        //         Year: "1970-01-01",
        //         Origin: "USA"
        //     },
        //     {
        //         Name: "buick skylark 320",
        //         Miles_per_Gallon: 15,
        //         Cylinders: 8,
        //         Displacement: 350,
        //         Horsepower: 165,
        //         Weight_in_lbs: 3693,
        //         Acceleration: 11.5,
        //         Year: "1970-01-01",
        //         Origin: "USA"
        //     }
        // ];
        schedule.forEach(data => {
            rawdata.push(data)
        });

        let data = JSON.stringify(rawdata);
        //__dirname 
        fs.writeFileSync(path.join(__dirname + '/../localfile/schedule.json'), data);

        return true;

    },
    async read() {
        // let data = await RecordStatusModel.findAll({});
        let rawdata = fs.readFileSync(path.join(__dirname + '/../localfile/schedule.json'));

        let data = JSON.parse(rawdata);
        console.log(data);
        return data;
    }
};

module.exports = FileControl;