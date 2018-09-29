package java.hackathon.filipe.institutoprojetovidabussines.service;

import com.google.gson.Gson;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitConfig {
    private final Retrofit retrofit;


    public RetrofitConfig() {
        this.retrofit = new Retrofit.Builder()
                .baseUrl("https://hacka-sankhya.herokuapp.com/api/")
                .addConverterFactory(GsonConverterFactory.create(new Gson()))
                .build();
    }

   public CallService getCallService() {
      return this.retrofit.create(CallService.class);
   }
}
