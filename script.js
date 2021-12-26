console.log('connecté !');
 // Sélection et stockage div Posts
 const postsContainer = document.querySelector('.posts');
//  console.log(postsContainer);
const posts = [
    {
        titre : "SEO, les bonnes pratiques",
        hashtag : "#SEO",
        extrait : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        titre : "Bien débuter en référencement payant",
        hashtag : "#référencement",
        extrait : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        titre : "Content Marketing, les bons arguments",
        hashtag : "#contentmarketing",
        extrait : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
console.log(posts);

// Affichage de chaque élément du tableau
posts.forEach(item=>{
    console.log(item);

    // Création d'une DIV article avec Template Strings(back ticks)
    const article = 
    `<div class="post">
        <div class="post-titre">${item.titre}</div>
        <div class="post-extrait">${item.extrait}</div>
        <div class="post-hashtag">${item.hashtag}</div>
    </div>
    `
    // console.log(article);
    
    // Ajout de article dans la div postcontainer
    postsContainer.innerHTML += article;
});
// Création d'un objet
const utilisateur = {
    nom : "Doe",
    prénom : "John",
    service : "marketing"
}

