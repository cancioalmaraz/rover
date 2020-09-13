package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"./packets/neo6m"
)

var gps neo6m.GpsNeo = neo6m.GpsNeo{
	Device:   "/dev/ttyS0",
	Baudrate: 115200,
}

func main() {
	jsonFile, err := os.OpenFile("data.json", os.O_RDWR|os.O_CREATE, os.ModePerm)
	if err != nil {
		log.Println("Error al abrir archivo:", err)
	}
	err = gps.Init()
	if err != nil {
		log.Println(err)
	}
	for {
		jsonFile.Seek(0, 0)
		_, err = fmt.Fprintf(jsonFile, `{ "Hour": %4d, "Minute": %4d, "Second": %4d }`, gps.Hour, gps.Minute, gps.Sec)
		if err != nil {
			log.Println("Error al codificar:", err)
		}
		time.Sleep(250 * time.Millisecond)
	}
}
