package in.ajinkyadhote.calculator.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import in.ajinkyadhote.calculator.controller.CalculatorController;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
   private static final Logger logger = LoggerFactory.getLogger(WebSecurityConfig.class);
   @Autowired
    private AuthFailure authFailure;

    @Autowired
    private AuthSuccess authSuccess;

    @Autowired
    private EntryPointUnauthorizedHandler unauthorizedHandler;

	@Override
    protected void configure(HttpSecurity http) throws Exception {
		logger.debug("Configuring security parameters");
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
		logger.debug("Configuring Global security parameters");
        auth
            .inMemoryAuthentication()
                .withUser("user").password("password").roles("USER");
    }

}
