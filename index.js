const farmAnimals = 'cow horse sheep pig chicken';
let [cow ,horse ,sheep ,pig ,chicken ]=['moo ','neigh', 'baa ','oink ','cluck'];
console.log(cow)
console.log(horse)
console.log(sheep)
console.log(pig)
console.log(chicken)


let= [cow, pig,chicken,sheep]=['bessie','dolly','babe','ltttle'];
console.log(cow)
console.log(pig)
console.log(chicken)
console.log(sheep)
 let=[cow,pig,sheep]=['blackwhite','black','pink']
 console.log(cow)
 console.log(pig)
 console.log(sheep)



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 const [color1,color2,color3,color4,color5,color6,color7]=colors;
  console.log(color1,color2,color3,color4,color5,color6,color7);
   let color =[red,orange,yellow,green,blue,violet]=['1','2','3','4','5','6',];
   console.log(red, orange,yellow,green,blue,violet);
   let arr=[red,orange,yellow,green,blue,violet];
   let indg=[...arr];
   console.log(arr)
   console.log(indg)


   

  




const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
}
const { muppetName, song, job, partner } = muppet;

console.log(muppetName)// 'Miss piggy'
console.log(color);      //! 'pink'
console.log(songs);      // ('Never Before, Never Again',')
console.log(job);        // 'Cast member of The Muppet Show'
console.log(partner);    // 'Kermit'



const nestedMuppet = { 
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

//objecte

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner/ Objects