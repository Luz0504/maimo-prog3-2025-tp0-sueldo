const recetasId = document.querySelector(".recetasId");

const searchParams = new URLSearchParams(window.location.search);
const recipeId = searchParams.get('id');

const main = async () => {
    const API_URL = `https://dummyjson.com/recipes/${recipeId}`; //obtener la info de las recetas
    const response = await fetch(API_URL);
    const recipesData = await response.json();

    recetasId.innerHTML =
        `<div class='receta-detalle'>
            <div class='up-down'>
                <div class='up'>
                    <img src='${recipesData.image}' alt='${recipesData.name}'>

                    <div id='detalles'>
                        <h1>${recipesData.name}</h1>
                        <p>Dificultad: ${recipesData.difficulty}</p>
                        <p>Cocina: ${recipesData.cuisine}</p>
                        <div>
                            <h3>Detalles:</h3>
                            <p>Tiempo de preparación: ${recipesData.prepTimeMinutes} minutos</p>
                            <p>Tiempo de cocción: ${recipesData.cookTimeMinutes} minutos</p>
                            <p>Porciones: ${recipesData.servings}</p>
                            <p>Calorías por porción: ${recipesData.caloriesPerServing}</p>
                        </div>
                        <div>
                            <h3>Etiquetas:</h3>
                            <ul>${recipesData.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
                        </div>
                        <div>
                            <h3>Tipo de comida:</h3>
                            <ul>${recipesData.mealType.map(meal => `<li>${meal}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>

                <div class='down'>
                
                    <div id='list'>
                        <h3>Ingredientes:</h3>
                        <div class='list-type5'>
                            <ol>${recipesData.ingredients.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ol>
                        </div>
                    </div>

                    <div id='otros-detalles'>
                        <div>
                            <h3>Instrucciones:</h3>
                            <ol>${recipesData.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
                        </div>
                        <div>
                            <h3>Valoraciones:</h3>
                            <p>Rating:${recipesData.rating}</p>
                            <p>Reseñas: ${recipesData.reviewCount}</p>
                        </div>
                    </div>
                </div>
            <div>

        </div>`;
}

main()