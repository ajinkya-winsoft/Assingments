package in.ajinkyadhote.lms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	String bookname;
	String publisher;
	String author;
	String type;
	
	public Long getId() {
		return id;
	}
	
	public String getbookname() {
		return bookname;
	}
	
	public void setbookname(String bookname) {
		this.bookname = bookname;
	}
	
	public String getPublisher() {
		return publisher;
	}
	
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	
	public String getAuthor() {
		return author;
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
}
