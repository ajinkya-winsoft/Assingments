package in.ajinkyadhote.lms.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Issuedbook {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	Long bookid;
	Date startdate;
	Date enddate;
	Long student;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getBookid() {
		return bookid;
	}
	public void setBookid(Long bookid) {
		this.bookid = bookid;
	}
	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(java.util.Date startDate2) {
		this.startdate = startDate2;
	}
	public Date getEnddate() {
		return enddate;
	}
	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}
	public Long getStudent() {
		return student;
	}
	public void setStudent(Long studentid) {
		this.student = studentid;
	}
}
