class SessionsController < ApplicationController
  def new
  end

  def create
    authenticate!
    flash[:notice] = "You loggined!"
    redirect_to operations_path
  end

  def destroy
    logout
    flash[:notice] = "You logoutted!"
    redirect_to login_path
  end

  def unauthenticated
    flash[:notice] = warden.message
  end
end

