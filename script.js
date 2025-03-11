// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// Conseils :
// 1er truc : console log qui affiche le bouton sur lequel on a cliqué quand on clique sur un chiffre
// ensuite l'afficher dans la calculette, les nb à 1 chiffres puis 2
// ensuite 2 chiffres
// quand il y a 000005 ça affiche que 5
// on termine par le décimal si on y arrive, parce que c'est beaucoup plus compliqué

// document.addEventListener()

let calculator = document.querySelector('.calculator')
let keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    for (let i=0; i<=9; i++) {
        if (e.target.textContent === `${i}`) {
            console.log(i)
    }
    }
  }
})