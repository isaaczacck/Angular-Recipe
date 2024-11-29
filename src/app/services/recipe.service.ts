import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Aglio e Olio',
      description: 'Simple and flavorful pasta with garlic and olive oil.',
      image: 'assets/Spaghetti.jpg',
      category: 'Main Course',
      ingredients: [
        '200g spaghetti',
        '4 cloves garlic, thinly sliced',
        '1/4 tsp red pepper flakes',
        '1/4 cup olive oil',
        'Salt and pepper to taste',
        'Fresh parsley, chopped',
        'Parmesan cheese (optional)',
      ],
    },
    {
      id: 2,
      name: 'Classic Caesar Salad',
      description: 'Crisp romaine lettuce tossed with creamy Caesar dressing.',
      image: 'assets/Classic-Caesar-Salad.jpg',
      category: 'Appetizer',
      ingredients: [
        '4 cups romaine lettuce, chopped',
        '1/2 cup Caesar dressing',
        '1/4 cup croutons',
        '1/4 cup grated Parmesan cheese',
        '1 tsp lemon juice',
        'Freshly ground black pepper',
      ],
    },
    {
      id: 3,
      name: 'Chicken Stir-Fry',
      description: 'Quick and healthy stir-fried chicken and vegetables.',
      image: 'assets/Chicken-Stir-Fry.jpg',
      category: 'Main Course',
      ingredients: [
        '2 chicken breasts, thinly sliced',
        '1 cup broccoli florets',
        '1/2 red bell pepper, sliced',
        '1/2 yellow bell pepper, sliced',
        '2 tbsp soy sauce',
        '1 tbsp sesame oil',
        '1 tsp grated ginger',
        '2 cloves garlic, minced',
        '1 tbsp honey',
      ],
    },
    {
      id: 4,
      name: 'Beef Tacos',
      description: 'Soft tacos filled with seasoned beef and fresh toppings.',
      image: 'assets/Beef-Tacos.jpg',
      category: 'Main Course',
      ingredients: [
        '500g ground beef',
        '1 onion, chopped',
        '1 tbsp taco seasoning',
        '1/2 cup salsa',
        '8 taco shells',
        'Shredded lettuce',
        'Chopped tomatoes',
        'Grated cheese',
        'Sour cream',
      ],
    },
    {
      id: 5,
      name: 'Caprese Salad',
      description: 'Fresh tomatoes, mozzarella, and basil with olive oil drizzle.',
      image: 'assets/Caprese-Salad.jpg',
      category: 'Appetizer',
      ingredients: [
        '2 large tomatoes, sliced',
        '1 ball fresh mozzarella, sliced',
        'Fresh basil leaves',
        '2 tbsp balsamic vinegar',
        '2 tbsp olive oil',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 6,
      name: 'Vegetable Soup',
      description: 'A hearty soup loaded with fresh vegetables.',
      image: 'assets/Vegetable-Soup.jpg',
      category: 'Soup',
      ingredients: [
        '1 onion, chopped',
        '2 carrots, sliced',
        '2 celery stalks, chopped',
        '2 potatoes, diced',
        '1 zucchini, chopped',
        '4 cups vegetable broth',
        '1 can diced tomatoes',
        'Salt and pepper to taste',
        'Fresh herbs like thyme and parsley',
      ],
    },
    {
      id: 7,
      name: 'Grilled Cheese Sandwich',
      description: 'Crispy sandwich with gooey melted cheese inside.',
      image: 'assets/Grilled-Cheese-Sandwich.jpg',
      category: 'Snack',
      ingredients: [
        '2 slices of bread',
        '2 tbsp butter',
        '2 slices cheddar cheese',
      ],
    },
    {
      id: 8,
      name: 'Margarita Pizza',
      description: 'Traditional Italian pizza with tomato, mozzarella, and basil.',
      image: 'assets/Margarita-Pizza.jpg',
      category: 'Main Course',
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        'Fresh basil leaves',
        '1 tbsp olive oil',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 9,
      name: 'Chicken Alfredo Pasta',
      description: 'Creamy Alfredo pasta topped with grilled chicken.',
      image: 'assets/Chicken-Alfredo-Pasta.jpg',
      category: 'Main Course',
      ingredients: [
        '2 chicken breasts, grilled and sliced',
        '200g fettuccine pasta',
        '1 cup heavy cream',
        '1/2 cup Parmesan cheese, grated',
        '2 tbsp butter',
        '2 cloves garlic, minced',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 10,
      name: 'Pancakes',
      description: 'Fluffy breakfast pancakes served with syrup.',
      image: 'assets/Pancakes.jpg',
      category: 'Breakfast',
      ingredients: [
        '1 cup all-purpose flour',
        '1 tbsp sugar',
        '2 tsp baking powder',
        '1/2 tsp salt',
        '1 cup milk',
        '1 egg',
        '2 tbsp melted butter',
        'Maple syrup for serving',
      ],
    },
  
  ];

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

}