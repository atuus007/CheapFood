package hu.unideb.back.controller.converter;

public class UpdatePetRequest {
    private long id;
    private String name;
    private int mennyisegfajta;
    private int mennyiseg;

    public UpdatePetRequest() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMennyisegfajta() {
        return mennyisegfajta;
    }

    public void setMennyisegfajta(int mennyisegfajta) {
        this.mennyisegfajta = mennyisegfajta;
    }

    public int getMennyiseg() {
        return mennyiseg;
    }

    public void setMennyiseg(int mennyiseg) {
        this.mennyiseg = mennyiseg;
    }
}
