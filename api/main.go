package main

import (
	"net/http"

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
	router.GET("/", getGreeting)
	router.GET("/api/bikes", getAllBikes)

	router.Run("localhost:8080")
}
