package database

import (
	"database/sql"
	entity "goapi/internal/entities"
)

type CategoryDb struct {
	db *sql.DB
}

func NewCategoryDB(db *sql.DB) *CategoryDb {
	return &CategoryDb{db: db}
}

func (cd *CategoryDb) GetCategories() ([]*entity.Category, error) {
	rows, err := cd.db.Query("SELECT id, name FROM categories")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var categories []*entity.Category
	for rows.Next() {
		var category entity.Category
		if err := rows.Scan(&category.ID, &category.Name); err != nil {
			return nil, err
		}
		categories = append(categories, &category)
	}
	return categories, nil
}

func (cd *CategoryDb) GetCategory(id string) (*entity.Category, error) {
	var category entity.Category
	err := cd.db.QueryRow("SELECT id, name FROM categories WHERE id = ?", id).Scan(&category.ID, &category.Name)
	if err != nil {
		return nil, err
	}
	return &category, nil
}

func (cd *CategoryDb) CreateCategory(category *entity.Category) (string, error) {
	_, err := cd.db.Exec("Insert into categories (id, name) values (?, ?)", category.ID, category.Name)
	if err != nil {
		return "", err
	}
	return category.ID, nil
}
