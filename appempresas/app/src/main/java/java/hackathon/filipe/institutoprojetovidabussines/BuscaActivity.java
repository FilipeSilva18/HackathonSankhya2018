package java.hackathon.filipe.institutoprojetovidabussines;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.KeyEvent;
import android.view.View;
import android.widget.EditText;
import android.widget.RelativeLayout;

import java.hackathon.filipe.institutoprojetovidabussines.model.User;
import java.hackathon.filipe.institutoprojetovidabussines.service.GetUsers;
import java.hackathon.filipe.institutoprojetovidabussines.service.RetrofitConfig;
import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class BuscaActivity extends AppCompatActivity implements GetUsers {

    private EditText caracteristica;
    private BuscaAdapter buscaAdapter;
    private RecyclerView recyclerView;
    private RelativeLayout viewEmpytList;
    private RelativeLayout mLayoutManager;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_busca);
        caracteristica = findViewById(R.id.edt_caracteristica);

        recyclerView = (RecyclerView) findViewById(R.id.list_movies);
        LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
        layoutManager.setReverseLayout(true);
        buscaAdapter = new BuscaAdapter();
        recyclerView.setLayoutManager(layoutManager);
        recyclerView.setAdapter(buscaAdapter);


        caracteristica.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if ((event.getAction() == KeyEvent.ACTION_DOWN) &&
                        (keyCode == KeyEvent.KEYCODE_ENTER)) {
                    buscarCaracteristicas(BuscaActivity.this);
                }
                return true;
            }
        });

    }

    public void buscarCaracteristicas(final GetUsers getUsers) {
        Call<List<User>> call = new RetrofitConfig().getCallService().getAllUsers();
        call.enqueue(new Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                getUsers.callbackServiceFilme(response.body());
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                System.out.println("eroooo" + t.getMessage());
            }
        });
    }

    @Override
    public void callbackServiceFilme(List<User> users) {
        buscaAdapter.addMessage(users);
        recyclerView.setAdapter(buscaAdapter);
    }
}
