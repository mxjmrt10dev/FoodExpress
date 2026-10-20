export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  featured?: boolean;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "La Trattoria Italiana",
    cuisine: "Italiana",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image: "🍕",
    featured: true,
    menu: [
      { id: "1-1", name: "Pizza Margherita", description: "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva", price: 12.99, image: "🍕", category: "Pizzas", popular: true },
      { id: "1-2", name: "Pizza Pepperoni", description: "Salsa de tomate, mozzarella y pepperoni artesanal", price: 14.99, image: "🍕", category: "Pizzas", popular: true },
      { id: "1-3", name: "Pasta Carbonara", description: "Espaguetis con salsa cremosa de huevo, panceta y parmesano", price: 13.99, image: "🍝", category: "Pastas" },
      { id: "1-4", name: "Lasagna Bolognese", description: "Capas de pasta con ragú de carne, bechamel y queso", price: 15.99, image: "🍝", category: "Pastas", popular: true },
      { id: "1-5", name: "Tiramisú", description: "Postre clásico italiano con café y mascarpone", price: 7.99, image: "🍰", category: "Postres" },
      { id: "1-6", name: "Bruschetta", description: "Pan tostado con tomate fresco, ajo y albahaca", price: 6.99, image: "🥖", category: "Entradas" },
    ]
  },
  {
    id: "2",
    name: "Sakura Sushi",
    cuisine: "Japonesa",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 3.49,
    image: "🍣",
    featured: true,
    menu: [
      { id: "2-1", name: "Sushi Variado (12 pzs)", description: "Selección de nigiri y maki del chef", price: 18.99, image: "🍣", category: "Sushi", popular: true },
      { id: "2-2", name: "Ramen Tonkotsu", description: "Caldo de cerdo con chashu, huevo y noodles", price: 14.99, image: "🍜", category: "Ramen", popular: true },
      { id: "2-3", name: "Gyoza (6 pzs)", description: "Dumplings de cerdo y verduras a la plancha", price: 8.99, image: "🥟", category: "Entradas" },
      { id: "2-4", name: "Tempura Mixto", description: "Camarones y verduras en tempura crujiente", price: 13.99, image: "🍤", category: "Entradas" },
      { id: "2-5", name: "Mochi Ice Cream", description: "Helado japonés en envoltura de arroz dulce", price: 5.99, image: "🍡", category: "Postres" },
      { id: "2-6", name: "Edamame", description: "Vainas de soja al vapor con sal marina", price: 4.99, image: "🫛", category: "Entradas" },
    ]
  },
  {
    id: "3",
    name: "El Rincón Mexicano",
    cuisine: "Mexicana",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image: "🌮",
    featured: true,
    menu: [
      { id: "3-1", name: "Tacos al Pastor (3 pzs)", description: "Tortilla de maíz, cerdo adobado, piña y cilantro", price: 9.99, image: "🌮", category: "Tacos", popular: true },
      { id: "3-2", name: "Burrito Supreme", description: "Tortilla grande con carne, frijoles, arroz y guacamole", price: 12.99, image: "🌯", category: "Burritos", popular: true },
      { id: "3-3", name: "Quesadilla de Pollo", description: "Tortilla de harina con pollo, queso fundido y pico de gallo", price: 10.99, image: "🫓", category: "Quesadillas" },
      { id: "3-4", name: "Nachos con Carne", description: "Totopos con carne molida, queso, jalapeños y crema", price: 11.99, image: "🧀", category: "Entradas" },
      { id: "3-5", name: "Churros con Chocolate", description: "Churros crujientes con salsa de chocolate caliente", price: 6.99, image: "🍫", category: "Postres" },
      { id: "3-6", name: "Agua de Horchata", description: "Bebida refrescante de arroz con canela", price: 3.99, image: "🥛", category: "Bebidas" },
    ]
  },
  {
    id: "4",
    name: "Burger House",
    cuisine: "Americana",
    rating: 4.5,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    image: "🍔",
    featured: false,
    menu: [
      { id: "4-1", name: "Classic Burger", description: "Carne 200g, lechuga, tomate, cebolla y queso cheddar", price: 10.99, image: "🍔", category: "Hamburguesas", popular: true },
      { id: "4-2", name: "BBQ Bacon Burger", description: "Carne 200g, bacon crujiente, cebolla caramelizada y salsa BBQ", price: 13.99, image: "🍔", category: "Hamburguesas", popular: true },
      { id: "4-3", name: "Chicken Burger", description: "Pechuga empanizada, coleslaw y salsa especial", price: 11.99, image: "🍔", category: "Hamburguesas" },
      { id: "4-4", name: "Papas Fritas", description: "Papas crujientes con sal marina", price: 4.99, image: "🍟", category: "Acompañamientos" },
      { id: "4-5", name: "Aros de Cebolla", description: "Aros de cebolla empanizados con salsa ranch", price: 5.99, image: "🧅", category: "Acompañamientos" },
      { id: "4-6", name: "Milkshake", description: "Batido cremoso en vainilla, chocolate o fresa", price: 5.99, image: "🥤", category: "Bebidas" },
    ]
  },
  {
    id: "5",
    name: "Wok Express",
    cuisine: "China",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image: "🥡",
    featured: false,
    menu: [
      { id: "5-1", name: "Arroz Frito Especial", description: "Arroz salteado con verduras, huevo y salsa de soja", price: 9.99, image: "🍚", category: "Arroces", popular: true },
      { id: "5-2", name: "Pollo Agridulce", description: "Pollo crujiente con salsa agridulce y piña", price: 12.99, image: "🍗", category: "Platos Principales", popular: true },
      { id: "5-3", name: "Chow Mein", description: "Noodles salteados con verduras y carne", price: 11.99, image: "🍜", category: "Noodles" },
      { id: "5-4", name: "Rollitos de Primavera (4 pzs)", description: "Rollitos crujientes rellenos de verduras", price: 6.99, image: "🥢", category: "Entradas" },
      { id: "5-5", name: "Sopa Wonton", description: "Caldo con wontons rellenos de cerdo y camarón", price: 7.99, image: "🍲", category: "Sopas" },
      { id: "5-6", name: "Té Verde", description: "Té verde caliente tradicional", price: 2.99, image: "🍵", category: "Bebidas" },
    ]
  },
  {
    id: "6",
    name: "Pizzería Don Carlo",
    cuisine: "Italiana",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image: "🍕",
    featured: false,
    menu: [
      { id: "6-1", name: "Pizza Cuatro Quesos", description: "Mozzarella, gorgonzola, parmesano y fontina", price: 15.99, image: "🍕", category: "Pizzas", popular: true },
      { id: "6-2", name: "Pizza Hawaiana", description: "Jamón, piña, mozzarella y salsa de tomate", price: 13.99, image: "🍕", category: "Pizzas" },
      { id: "6-3", name: "Pizza Vegetariana", description: "Pimientos, champiñones, cebolla, aceitunas y tomate", price: 12.99, image: "🍕", category: "Pizzas" },
      { id: "6-4", name: "Focaccia", description: "Pan italiano con romero, sal gruesa y aceite de oliva", price: 5.99, image: "🥖", category: "Entradas" },
      { id: "6-5", name: "Gelato Artesanal", description: "Helado italiano en pistacho, stracciatella o limón", price: 5.99, image: "🍨", category: "Postres" },
      { id: "6-6", name: "Limonada Italiana", description: "Limonada con limón siciliano y hierbabuena", price: 4.99, image: "🍋", category: "Bebidas" },
    ]
  }
];

export const categories = [
  { id: "all", name: "Todos", icon: "🍽️" },
  { id: "italiana", name: "Italiana", icon: "🍕" },
  { id: "japonesa", name: "Japonesa", icon: "🍣" },
  { id: "mexicana", name: "Mexicana", icon: "🌮" },
  { id: "americana", name: "Americana", icon: "🍔" },
  { id: "china", name: "China", icon: "🥡" },
];
