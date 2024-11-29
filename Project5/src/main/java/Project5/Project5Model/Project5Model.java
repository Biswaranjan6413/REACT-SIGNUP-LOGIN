package Project5.Project5Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Project5Model {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;
    private String emailid;
    private long phone;
    private String password;

    public Project5Model() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Project5Model(long id, String emailid, long phone, String password) {
        this.id = id;
        this.emailid = emailid;
        this.phone = phone;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Project5Model{" +
                "id=" + id +
                ", emailid='" + emailid + '\'' +
                ", phone=" + phone +
                ", password='" + password + '\'' +
                '}';
    }


}
