    	<div id="gameofthrones_loginsystem_login">
	    	<div id="register_header">Enter ASOIAF Game Account</div>

	    	<div id="register_block1">
	    			<span class="register_block1_text">Log in with your game account here to join our pre Alpha. You can check our progress toward full release on the <p><a href="index.php">ASOIAF PROGRESS PAGE!</a></p></span>
	    	</div>

	    	<div id="register_header">Login</div>

	    	<div id="register_block2">
				<form name="register_form" id="register_form" action="core/login.php" method="POST">
					<div id="inside_register_form">
						<div class="register_table">
							<table width="100%">
								<tr>
									<td width="10%" id="username_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="username" placeholder="Username/email"></td>
								</tr>
							</table>
						</div>
						<div class="register_table">	
							<table width="100%">
								<tr>
									<td width="10%" id="password_icon" class="register_icon"></td>
									<td width="90%"><input class="register_input" type="text" name="password" placeholder="Password"></td>
								</tr>
							</table>		
						</div>			
						<div class="register_table3">
							<button id="register_button_create" type="submit" name="login">Log In<span id="create_icon"></span></button>
						</div>

						<hr class="horizontal_line">

						<div class="register_table4">
							<p>Dont have an ASOIAF account?</p>
							<p class="register_block2_text"><a id="loginsystem_login_get_register">Register</a> or <a href="index.php">Reset Password</a></p>
						</div>
					</div>
				</form>
			</div> <!-- END id register_block2 -->
		</div> <!-- END id gameofthrones_content_register -->