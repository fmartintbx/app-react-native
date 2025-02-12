package main

import ( 
   "fmt" 
   "net/http"
   "text/template"
)
type Users struct {
     Name string
     Skills string
     Age int

}


func Index(rw http.ResponseWriter, r *http.Request) { 
    template, err := template.ParseFiles("templates/index.html")

    user := Users{"Facu Corva", "dev golang", 35}

    if err != nil{ 
        panic(err)
    }else { 
        template.Execute(rw, user) 
    }
	  
 }
func main() { 
	http.HandleFunc("/", Index)
    //Create Server

    fmt.Println("The server is running in port 3000")
	fmt.Println("Run server: http://localhost:3000")
    http.ListenAndServe("localhost:3000", nil)
}