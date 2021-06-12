document.getElementById('getText').addEventListener('click',getText);
      document.getElementById('getUsers').addEventListener('click',getUsers);
      document.getElementById('getExternal').addEventListener('click',getPost);
      document.getElementById('addPost').addEventListener('submit',sendPost);

      function getText(){
        //  fetch('sample.txt').then(function(res){
         //     return res.text();
         // }).then(function(data){
        //   console.log(data);
        //  });
  

        //shorter/cleaner version of the above code
        fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
// display data into html page
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err))


      }

      function getUsers(){
        fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
// display data into html page
            let output = '<h3>Users</h3>';

            data.forEach(function(user) {
                output += `
                    <ul>
                    <li>ID:${user.id}</li>
                    <li>Firsname:${user.first_name}</li>
                    <li>Ip Address:${user.ip_address}</li>

                    </ul>
                    `;
            });
           document.getElementById("jsonOutput").innerHTML = output;
        })
        
        
      }

      function getPost(){

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
// display data into html page
            let output = '<h3>Posts</h3>';

            data.forEach(function(post) {
                output += `
                    <di>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                    `;
            });
           document.getElementById("jsonOutput").innerHTML = output;
        })
        

      }

     
