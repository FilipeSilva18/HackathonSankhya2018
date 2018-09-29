package java.hackathon.filipe.institutoprojetovidabussines.service;

import java.hackathon.filipe.institutoprojetovidabussines.model.User;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface CallService {

    @GET("InstitutoProjetoVida")
    Call<List<User>> getAllUsers();


}
