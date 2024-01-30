package main

import (
	"database/sql"
	"fmt"
	"goapi/internal/database"
	service "goapi/internal/services"
	"goapi/internal/webserver"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/imersao17")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	categoryDB := database.NewCategoryDB(db)
	productDB := database.NewProductDB(db)
	categoryService := service.NewCategoryService(categoryDB)
	productService := service.NewProductService(productDB)
	webCategoryHandler := webserver.NewCategoryHandler(categoryService)
	webProductHandler := webserver.NewProductHandler(productService)

	c := chi.NewRouter()
	c.Use(middleware.Logger)
	c.Use(middleware.Recoverer)

	c.Get("/category", webCategoryHandler.GetCategories)
	c.Get("/category/{id}", webCategoryHandler.GetCategory)
	c.Post("/category", webCategoryHandler.CreateCategory)

	c.Get("/product", webProductHandler.GetProducts)
	c.Get("/product/{id}", webProductHandler.GetProduct)
	c.Post("/product", webProductHandler.CreateProduct)
	c.Get("/product/category/{categoryID}", webProductHandler.GetProductByCategoryId)

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", c)
}
