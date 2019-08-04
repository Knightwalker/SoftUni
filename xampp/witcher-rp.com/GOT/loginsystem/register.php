    	<div id="gameofthrones_loginsystem_register">
	    	<div id="register_header">Create ASOIAF Game Account</div>

	    	<div id="register_block1">
	    			<span class="register_block1_text">Create your game account here to join our pre Alpha. You can check our progress toward full release on the <p><a href="index.php">ASOIAF PROGRESS PAGE!</a></p></span>
	    	</div>

	    	<div id="register_header">Sign Up</div>

	    	<div id="register_block2">
				<form name="register_form" id="register_form" action="core/register.php" method="POST">
					<div id="inside_register_form">
						<div class="register_table">
							<table width="100%">
								<tr>
									<td width="10%" id="username_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="username" placeholder="Username"></td>
								</tr>
							</table>
						</div>
						<div class="register_table">	
							<table width="100%">
								<tr>
									<td width="10%" id="password_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="password" placeholder="New Password"></td>
								</tr>
							</table>		
						</div>		
						<div class="register_table">	
							<table width="100%">
								<tr>
									<td width="10%" id="password_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="password2" placeholder="Re-Type Password"></td>
								</tr>
							</table>		
						</div>	
						<div class="register_table">	
							<table width="100%">
								<tr>
									<td width="10%" id="email_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="email" placeholder="Email"></td>
								</tr>
							</table>		
						</div>	
						<div class="register_table2">
							<span>And are you a <input type="radio" id="sexfemale" name="sex" value="female"><label for="sexfemale"> Female or a </label><input type="radio" id="sexmale" name="sex" value="male" checked="checked"><label for="sexmale">Male?</label></span>
						</div>
						<br>
						<div class="register_table2">
							<input type="checkbox" id="verify_age" name="verify_age" value="yes"> 
							<label for="verify_age">I am over 17 years of age.</label>
						</div>
						<div class="register_table2">
							<input type="checkbox" id="verify_tos" name="verify_tos" value="yes"> 
							<label for="verify_tos">I agree to the Terms and Conditions.</label>
						</div>
						<br>
						<div class="register_table2">
							<span>*An email confirmation will be sent to this address to verify it before you can log in.</span>
						</div>
						<br>
						<div class="register_table3">
							<button id="register_button_create" type="submit" name="submit">Create account<span id="create_icon"></span></button>
						</div>

						<hr class="horizontal_line">

						<div class="register_table4">
							<p>Already have an ASOIAF account?</p>
							<p class="register_block2_text"><a id="loginsystem_register_get_login">Login</a> or <a href="index.php">Reset Password</a></p>
						</div>
					</div>
				</form>
			</div> <!-- END id register_block2 -->
		</div> <!-- END id gameofthrones_content_register -->