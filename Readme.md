#project CRUD API
## Mongo DB methods.

model.findById({ id }) => fetch the single data (object) [GET]
model.findByIdAndUpdate ({id}, data) => Update the data (PATCH/PUT)
model.findByIdAndDelete ({id}) => to delete single data (DELETE)

model.find() => to read all the objects (GET)

model.create(data) => to create or save data into database(POST)
if we create instance to model
let newInst = new Model(data)
newInst.save()

model.findOne({anyField: value}) => fetch the single data (GET)
model.findOneAndUpdate ({anyField: value}, data) => to udpdate the data (PATCH/PUT)
model.findOneAndDelete ({anyField: value}) => to delete the data (DELETE)