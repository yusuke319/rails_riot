module ApplicationHelper
  WEBPACK_DEV_SRV_PORT = 3001

  def assets_path(path)
    return "http://localhost:#{WEBPACK_DEV_SRV_PORT}/#{path}" if Rails.env.development?
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/dist/#{path}"
  end
end
