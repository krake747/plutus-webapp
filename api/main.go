package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Bike struct {
	Id    int    `json:"id"`
	Brand string `json:"brand"`
}

var bikes = []Bike{
	{Id: 1, Brand: "Trek"},
	{Id: 2, Brand: "Santa Cruz"},
	{Id: 3, Brand: "Giant"},
}

func getGreeting(c *gin.Context) {
	c.String(http.StatusOK, "Hello from backend")
}

func getAllBikes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, bikes)
}

func main() {
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/hello", getGreeting)
	router.GET("/api/bikes", getAllBikes)

	// router.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{"http://localhost:3000"},
	// 	AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"},
	// 	AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	MaxAge:           12 * time.Hour,
	// }))
	router.Run("localhost:3001")
}
