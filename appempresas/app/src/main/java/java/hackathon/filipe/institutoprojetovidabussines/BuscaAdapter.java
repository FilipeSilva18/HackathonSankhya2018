package java.hackathon.filipe.institutoprojetovidabussines;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.hackathon.filipe.institutoprojetovidabussines.model.User;
import java.util.ArrayList;
import java.util.List;

import de.hdodenhof.circleimageview.CircleImageView;

public class BuscaAdapter extends RecyclerView.Adapter {

    public ArrayList<User> mDataset;
    private final int VIEW_ITEM = 1;




    public static class ViewHolder extends RecyclerView.ViewHolder {

        public TextView tvName;
        public CircleImageView imgUser;
        public TextView tvId;


        public ViewHolder(View v) {
            super(v);
            tvName = v.findViewById(R.id.tv_name);
            imgUser = v.findViewById(R.id.img_user);
            tvId = v.findViewById(R.id.tv_id);
        }
    }

    public BuscaAdapter() {
        this.mDataset = new ArrayList<>();
    }

    public BuscaAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        ViewHolder vh = null;
        if (viewType == VIEW_ITEM) {
            View v = (View) LayoutInflater.from(parent.getContext()).inflate
                    (R.layout.user_item, parent, false);
            vh = new BuscaAdapter.ViewHolder(v);
        }
        return vh;
    }


    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        if (holder instanceof BuscaAdapter.ViewHolder) {
            if (mDataset.get(position).getFoto() != null  ) {
                Picasso.get()
                        .load(mDataset.get(position).getFoto())
                        .resize(280, 350)
                        .centerCrop()
                        .into(((ViewHolder) holder).imgUser);
            }
            ((ViewHolder) holder).tvName.setText(mDataset.get(position).getNome());
            ((ViewHolder) holder).tvId.setText(mDataset.get(position).getIdFacebook());
        }
    }

    @Override
    public int getItemCount() {
        return this.mDataset.size();
    }

    public void addMessage(List<User> users) {
        if(users!=null)
            for(int i=0;i<users.size();i++){
            this.mDataset.add(users.get(i));
            }
    }
}
