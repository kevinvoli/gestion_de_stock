import logging



logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

sh = logging.StreamHandler()
sh.setLevel(logging.DEBUG)

formatter = logging.Formatter('%(levelname)s:  %(message)s')

sh.setFormatter(formatter)

logger.addHandler(sh)
