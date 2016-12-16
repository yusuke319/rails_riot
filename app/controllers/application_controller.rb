class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_filter :set_locale

  def set_locale
    I18n.locale = locale
  end

  private
    def locale
      @locale ||= params[:locale] || I18n.default_locale
    end

    def default_url_options(options={})
      options.merge(locale: locale)
    end
end
