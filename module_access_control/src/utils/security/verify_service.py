from services.modules.service_module import get_service_by_api_key


def is_valid_api_key(api_key, service_name):
    return get_service_by_api_key(api_key=api_key, service_name=service_name)