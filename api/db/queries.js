import {pool} from './pool.js'

async function getAllItems() {
  const {rows} = await pool.query("SELECT * from items")
  return rows
}

async function createNewItem(item, categoryId) {
  try {
    await pool.query("INSERT INTO items (item, category_id) VALUES ($1, $2)", [item, categoryId]);
  }
  catch (error) {
    console.error(error)
  }
}

async function deleteItem(item) {
  try {
    await pool.query("DELETE FROM items WHERE item = $1", [item]);
  }
  catch (error) {
    console.error(error)
  }
}

async function updateItem(newItem, item) {
  try {
    await pool.query("UPDATE items SET item = $1 WHERE item = $2", [newItem, item]);
  }
  catch (error) {
    console.error(error)
  }
}

async function getAllCategories() {
  const {rows} = await pool.query("SELECT * from categories")
  return rows
}

async function createNewCategory(category) {
  try {
    await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
  }
  catch (error) {
    console.error(error)
  }
}

async function deleteCategory(category) {
  try {
    await pool.query("DELETE FROM categories WHERE category = $1", [category]);
  }
  catch (error) {
    console.error(error)
  }
}

async function updateCategory(newCategory, category) {
  try {
    await pool.query("UPDATE categories SET category = $1 WHERE category = $2", [newCategory, category]);
  }
  catch (error) {
    console.error(error)
  }
}

export const queries = {
  getAllItems,
  createNewItem,
  deleteItem,
  updateItem,
  getAllCategories,
  createNewCategory,
  deleteCategory,
  updateCategory
}