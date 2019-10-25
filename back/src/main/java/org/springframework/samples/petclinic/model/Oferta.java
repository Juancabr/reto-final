package org.springframework.samples.petclinic.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.core.style.ToStringCreator;

@Entity
@Table(name = "ofertas")
public class Oferta {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "title")
    @NotEmpty
	private String title;
	
	@Column(name = "description")
    @NotEmpty
	private String description;
	
	@Column(name = "discount")
    @NotEmpty
	private Double discount;
	
	@Column(name = "expiredate")
	@NotEmpty
	private Date expireDate;

	public Oferta() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Date getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}

	@Override
	public String toString() {
		return new ToStringCreator(this)
	            .append("id", this.getId())
	            .append("title", this.getTitle())
	            .append("description", this.getDescription())
	            .append("discount", this.getDiscount())
	            .append("expiredate", this.getExpireDate())
	            .toString();
	}
	
	
	
}
