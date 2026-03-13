import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://grupo-30:grupo-30@cluster0.blryo.mongodb.net/NodeMod3Cohorte5') 
.then(() => console.log('Conección de María José a MongoDB '))
.catch(err => console.error('Error de María José al conectar a MongoDB:', error));


const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido'}, 
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now }, 
    creador: String},
     {collection: 'Grupo-30'});
const SuperHero = mongoose.model('SuperHero', superheroSchema);

// inserta

async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperheroe: 'Spiderman',  
    nombreReal: 'Peter Parker',
    edad: 25,
    planetaOrigen: 'Tierra',
    debilidad: 'Radioactiva',
    poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
    aliados: ['Ironman'],
    enemigos: ['Duende Verde'],
    creador: 'María José'
  });

  await hero.save();
  console.log('Superhéroe insertado:', hero);
}

insertSuperHero();

//Actualiza:
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 33 } }
  );
  console.log('Resultado de la actualización:', result);

}

updateSuperHero('Spiderman');

//Elimina:
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe});
  console.log ("Superhéroe eliminado:", result);
}
deleteSuperHero('Spiderman');

//Busca 1 documento:

async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
  console.log('Superhéroes encontrados:', heroes);  
}

findSuperHeroes();