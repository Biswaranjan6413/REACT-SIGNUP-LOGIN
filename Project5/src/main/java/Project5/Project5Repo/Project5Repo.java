package Project5.Project5Repo;

import Project5.Project5Model.Project5Model;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface  Project5Repo extends JpaRepository<Project5Model,Long> {

    Optional<Project5Model> findByEmailidAndPassword(String emailid, String password);
}
