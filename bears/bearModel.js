const mongoose = require('mongoose');

// creating a schema

const definition = {
    
        species: {
            type: String,
            required: true
        }, 
        latinName: {
            type: String,
            required: true
        }, 
        createdOn: {
            type: StrDateing,
            default: Date.now
        },
};


const options = {

}
const bearSchema = new mongoose.Schema{definition, options}