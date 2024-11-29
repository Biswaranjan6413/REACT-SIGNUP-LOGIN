package Project5.Project5Controller;

import Project5.Project5Model.Project5Model;
import Project5.Project5Repo.Project5Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/api")
public class Project5Controller {

    @Autowired
    public Project5Repo project5Repo;

    @PostMapping("/post")
    public Project5Model createpost(@RequestBody Project5Model project5Model)
    {
        return project5Repo.save(project5Model);
    }

//    @DeleteMapping("/deleteAll")
//  public void deleteall()
//  {
//      project5Repo.deleteAll();
//      return;
//  }
//
//  @DeleteMapping("/deleteid")
//  public void delete(@RequestParam long Rollnoumber)
//  {
//    project5Repo.findById(Rollnoumber);
//      return ;
//  }

//    @GetMapping("/{id}")
//    public Optional<Project5Model> getuseById(@RequestParam long id)
//    {
//        return project5Repo.findById(id);
//    }


    @PostMapping("/user")
    public ResponseEntity<String> loginUser(@RequestBody Project5Model loginRequest) {
        // Extract email and password
        String emailid = loginRequest.getEmailid();
        String password = loginRequest.getPassword();

        // Validate using the repository method
        Optional<Project5Model> user = project5Repo.findByEmailidAndPassword(emailid,password);

        if (user.isPresent()) {
            return ResponseEntity.ok("Login Successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid Email or Password.");
        }
    }


}
