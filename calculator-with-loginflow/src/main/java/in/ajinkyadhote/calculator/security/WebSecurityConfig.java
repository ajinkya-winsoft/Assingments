package in.ajinkyadhote.calculator.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
   @Autowired
    private AuthFailure authFailure;

    @Autowired
    private AuthSuccess authSuccess;

    @Autowired
    private EntryPointUnauthorizedHandler unauthorizedHandler;

	@Override
    protected void configure(HttpSecurity http) throws Exception {
		 http
		 .csrf().disable()
		 .exceptionHandling()
	         .authenticationEntryPoint(unauthorizedHandler)
	         .and()
	     .formLogin()
	         .successHandler(authSuccess)
	         .failureHandler(authFailure)
	     .and()
         .authorizeRequests()
             .antMatchers("/login","/")
                 .permitAll()
             .antMatchers("/calculator/**")
             	.authenticated();
             
	}
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .inMemoryAuthentication()
                .withUser("user").password("password").roles("USER");
    }

}
