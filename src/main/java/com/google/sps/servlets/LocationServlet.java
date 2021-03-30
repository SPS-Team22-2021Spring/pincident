package com.google.sps.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Blob;
import java.util.LinkedList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.PrintWriter;
import java.io.File;

import com.fasterxml.jackson.databind.ObjectMapper;
//import com.google.sps.classes.Article;
import com.google.sps.classes.Locationob;

@WebServlet("/ls")
public class LocationServlet extends HttpServlet {
	
    private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
	        throws ServletException, IOException{
	    List<Locationob> locations = new LinkedList<Locationob>();
        // 1. get received JSON data from request
		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String json = "";
		if(br != null){
			json = br.readLine();
			System.out.println(json);
        }
        
        /////////////////////In this part we need to fetch the locations via //////////////////////// 
        Blob blobsin = null;
        Locationob loc1 = new Locationob(1, "Hello", -31, -30, "house1", null, 5);
        Locationob loc2 = new Locationob(2, "Hello1", -32, -30, "house2", null, 6);
        Locationob loc3 = new Locationob(3, "Hello2", -33, -30, "house3", null, 7);
        Locationob loc4 = new Locationob(4, "Hello3", -34, -30, "house4", null, 8);

        locations.add(loc1);
        locations.add(loc2);
        locations.add(loc3);
        locations.add(loc4);
        /////////////////////////////////////////////////////////////////////////  
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        out.print(new Gson().toJson(locations));
        out.flush();   
           
    	//response.setContentType("text/html;");
        //response.getWriter().println(json);

		// 5. Add article to List<Article>
		//articles.add(location);

		// 6. Send List<Article> as JSON to client
		//mapper.writeValue(response.getOutputStream(), location);
	}
}